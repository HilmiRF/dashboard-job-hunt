import React, { FC } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import ButtonActionTable from "@/components/organisms/ButtonActionTable";
import prisma from "../../../../lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import moment from "moment";
import { dateFormat } from "@/lib/utils";


interface JobListingsPageProps {}

async function getDataJobs() {
  const session = await getServerSession(authOptions);
  const jobs = prisma.job.findMany({
    where: {
      companyId: session?.user.id,
    },
  });

  return jobs;
}

const JobListingspage: FC<JobListingsPageProps> = async ({}) => {
  const jobs = await getDataJobs();
  console.log('hehe');
  
  console.log(jobs);

  return (
    <>
      <div className="font-semibold text-3xl">Job Listings</div>
      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((item: any, i: number) => (
              <TableRow key={item.roles + i}>
                <TableCell>{item.roles}</TableCell>
                <TableCell>
									{moment(item.datePosted).isBefore(
										item.dueDate
									) ? (
										<Badge>Live</Badge>
									) : (
										<Badge variant="destructive">
											Expired
										</Badge>
									)}
								</TableCell>
                <TableCell>
									{dateFormat(item.datePosted)}
								</TableCell>
								<TableCell>
									{dateFormat(item.dueDate)}
								</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants} / {item.needs}
                </TableCell>
                <TableCell>
                  <ButtonActionTable url={`/job-detail/${item.id}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default JobListingspage;
