import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job title is required" })
    .min(3, { message: "Job title must contain atleast 3 characters." }),
  jobType: z.enum(JOBTYPES, { required_error: "Select atleast 1 job type." }),
  salaryFrom: z.string({ required_error: "Salary From is required." }),
  salaryTo: z.string({ required_error: "Salary To is required." }),
  categoryId: z.string({ required_error: "Select a category." }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Must atleast have one required skill." }),
  jobDescription: z
    .string({ required_error: "Job Description is required." })
    .min(10, {
      message: "Job description must contain atleast 10 characters.",
    }),
  responsibility: z
    .string({ required_error: "Responsibility is required." })
    .min(10, {
      message: "Responsibility must contain atleast 10 characters.",
    }),
  whoYouAre: z.string({ required_error: "Who you are is required." }).min(10, {
    message: "Who you are must contain atleast 10 characters.",
  }),
  niceToHaves: z
    .string({ required_error: "Nice to Have is required." })
    .min(10, {
      message: "Nice to Have must contain atleast 10 characters.",
    }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be atleast 1 benefit." }),
});

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Image is required" }),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.date({ required_error: "Date Founded is required" }),
  techStack: z
    .string({ message: "Tech Stack must be at least 1 data" })
    .array()
    .nonempty({ message: "Tech Stack must be at least 1 data" }),
  description: z.string({ message: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: "Facebook is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  linkedin: z.string({ required_error: "LinkedIn is required" }),
  twitter: z.string({ required_error: "Twitter is required" }),
  youtube: z.string({ required_error: "Youtube is required" }),
});

export const teamFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  position: z.string({ required_error: "Position is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  linkedin: z.string({ required_error: "LinkedIn is required" }),
});

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: "E-Mail is required" })
    .email({ message: "E-Mail is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});

export const signUpFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "E-Mail is required" })
    .email({ message: "E-Mail is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});
