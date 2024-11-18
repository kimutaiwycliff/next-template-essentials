import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import BreadCrumbsHeader from "../BreadCrumbsHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/tables/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}
const items = [{ name: "Grades" }];

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
       <BreadCrumbsHeader items={items}/>
       <Card className="shadow-md border-1">
          <CardHeader className="shadow-md py-4">
            <CardTitle className="text-xl">Grades</CardTitle>
          </CardHeader>
          <CardContent className="py-5">
          <DataTable data={tasks} columns={columns} />
          </CardContent>
        </Card>

      </div>
    </>
  )
}
