import { EnumValues } from "zod";

export type optionType = {
  id: string;
  label: string;
};

export const JOBTYPES: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "live",
    datePosted: "19 May 2024",
    dueDate: "19 Sep 2024",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
];

export const JOB_APPLICANT_COLUMNS: string[] = ["Name", "Applied Date"];

export const JOB_APPLICANT_DATA = [
  {
    name: "Hilmi Rafif Fajari",
    appliedDate: "21 May 2024",
  },
];

export const LOCATION_OPTIONS: optionType[] = [
  {
    id: "Indonesia",
    label: "Indonesia",
  },
  {
    id: "Singapore",
    label: "Singapore",
  },
  {
    id: "Malaysia",
    label: "Malaysia",
  },
  {
    id: "Thailand",
    label: "Thailand",
  },
];

export const EMPLOYEE_OPTIONS: optionType[] = [
  {
    id: "1-50",
    label: "1-50",
  },
  {
    id: "51-150",
    label: "51-150",
  },
  {
    id: "151-250",
    label: "151-250",
  },
  {
    id: "251-500",
    label: "251-500",
  },
  {
    id: "501-1000",
    label: "501-1000",
  },
  {
    id: "1001-above",
    label: "1001-above",
  },
];
