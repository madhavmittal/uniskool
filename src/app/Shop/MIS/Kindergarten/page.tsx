import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto my-6">
      {/* Breadcrumb */}
      <Breadcrumb className="ml-14">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Organizations
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Modern International</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/GIS">Ganga International</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/SDPS">SD Public</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mt-2">
                  <Link href="/Shop/TM">Tata Motors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/MG">MG Motors</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Grade
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Kindergarten</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/MIS/Primary">1 to 5</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/MIS/Secondary">6 to 12</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Kindergarten</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default page;
