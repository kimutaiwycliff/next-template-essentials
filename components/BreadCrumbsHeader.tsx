import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const BreadCrumbsHeader = ({items}: { items: any }) => {
  return (
    <Breadcrumb className="p-10 pb-0">
      <BreadcrumbList className="text-md">
        <BreadcrumbItem>
          <BreadcrumbLink href="/staff/dashboard">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.url ? (
                <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadCrumbsHeader
