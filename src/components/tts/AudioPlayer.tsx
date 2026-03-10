import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Square, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

interface AudioPlayerProps {
  chapterId: string;
  sectionId: string;
  title?: string;
}

export default function AudioPlayer({ chapterId, sectionId, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const audioSrc = `/audio/${chapterId}/${sectionId}.mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      setError('Audio no disponible para esta sección');
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Math.max(0, Math.min(audio.currentTime + seconds, duration));
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  if (error) {
    return (
      <div className="bg-base-200 rounded-lg p-4 text-center text-base-content/60">
        <Volume2 className="w-6 h-6 mx-auto mb-2 opacity-50" />
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-base-200 rounded-lg p-4">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Volume2 className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium">
          {title || 'Escuchar sección'}
        </span>
        {isLoading && (
          <span className="loading loading-spinner loading-xs ml-auto"></span>
        )}
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-base-content/60 w-10 text-right">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={seek}
          className="range range-primary range-xs flex-1"
          disabled={isLoading}
        />
        <span className="text-xs text-base-content/60 w-10">
          {formatTime(duration)}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {/* Skip back */}
          <button
            onClick={() => skip(-10)}
            className="btn btn-ghost btn-sm btn-circle"
            disabled={isLoading}
            title="Retroceder 10s"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="btn btn-primary btn-sm btn-circle"
            disabled={isLoading}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>

          {/* Stop */}
          <button
            onClick={stop}
            className="btn btn-ghost btn-sm btn-circle"
            disabled={isLoading || !isPlaying}
            title="Detener"
          >
            <Square className="w-4 h-4" />
          </button>

          {/* Skip forward */}
          <button
            onClick={() => skip(10)}
            className="btn btn-ghost btn-sm btn-circle"
            disabled={isLoading}
            title="Avanzar 10s"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Speed control */}
        <div className="flex items-center gap-2">
          <select
            value={playbackRate}
            onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
            className="select select-ghost select-xs"
            disabled={isLoading}
          >
            {playbackRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}x
              </option>
            ))}
          </select>

          {/* Volume */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="btn btn-ghost btn-sm btn-circle"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
