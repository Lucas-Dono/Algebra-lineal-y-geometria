import metadata from '../../../content/metadata.json';

export interface Section {
  id: string;
  title: string;
  file: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
}

export interface Metadata {
  title: string;
  description: string;
  version: string;
  chapters: Chapter[];
}

export function getMetadata(): Metadata {
  return metadata as Metadata;
}

export function getChapters(): Chapter[] {
  return metadata.chapters;
}

export function getChapter(chapterId: string): Chapter | undefined {
  return metadata.chapters.find(c => c.id === chapterId);
}

export function getChapterByNumber(num: number): Chapter | undefined {
  return metadata.chapters.find(c => c.number === num);
}

export function getSection(chapterId: string, sectionId: string): Section | undefined {
  const chapter = getChapter(chapterId);
  return chapter?.sections.find(s => s.id === sectionId);
}

export function getNextSection(chapterId: string, sectionId: string): { chapter: Chapter; section: Section } | null {
  const chapters = getChapters();
  const chapterIndex = chapters.findIndex(c => c.id === chapterId);

  if (chapterIndex === -1) return null;

  const chapter = chapters[chapterIndex];
  const sectionIndex = chapter.sections.findIndex(s => s.id === sectionId);

  // Check if there's a next section in the same chapter
  if (sectionIndex < chapter.sections.length - 1) {
    return {
      chapter,
      section: chapter.sections[sectionIndex + 1],
    };
  }

  // Check if there's a next chapter
  if (chapterIndex < chapters.length - 1) {
    const nextChapter = chapters[chapterIndex + 1];
    return {
      chapter: nextChapter,
      section: nextChapter.sections[0],
    };
  }

  return null;
}

export function getPreviousSection(chapterId: string, sectionId: string): { chapter: Chapter; section: Section } | null {
  const chapters = getChapters();
  const chapterIndex = chapters.findIndex(c => c.id === chapterId);

  if (chapterIndex === -1) return null;

  const chapter = chapters[chapterIndex];
  const sectionIndex = chapter.sections.findIndex(s => s.id === sectionId);

  // Check if there's a previous section in the same chapter
  if (sectionIndex > 0) {
    return {
      chapter,
      section: chapter.sections[sectionIndex - 1],
    };
  }

  // Check if there's a previous chapter
  if (chapterIndex > 0) {
    const prevChapter = chapters[chapterIndex - 1];
    return {
      chapter: prevChapter,
      section: prevChapter.sections[prevChapter.sections.length - 1],
    };
  }

  return null;
}

export function getSectionPath(chapterId: string, sectionId: string): string {
  return `/chapters/${chapterId}/${sectionId}`;
}

export function getChapterPath(chapterId: string): string {
  return `/chapters/${chapterId}`;
}

export function getTotalSections(): number {
  return metadata.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
}
