import { enHeaderData, ptHeaderData } from "./header";

export interface SectionSchema {
  id: number;
  value: string;
  section: string;
}

export const enSections = [
  { id: 1, value: "about", section: enHeaderData.about },
  { id: 2, value: "projects", section: enHeaderData.projects },
  { id: 3, value: "recommendations", section: enHeaderData.recommendations },
  { id: 4, value: "contact", section: enHeaderData.contact },
];

export const ptSections = [
  { id: 1, value: "about", section: ptHeaderData.about },
  { id: 2, value: "projects", section: ptHeaderData.projects },
  { id: 3, value: "recommendations", section: ptHeaderData.recommendations },
  { id: 4, value: "contact", section: ptHeaderData.contact },
];
