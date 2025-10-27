import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight, Home, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WebBreadcrumbProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function WebBreadcrumb({
  title,
  subtitle = "Welcome to CarrGo!",
  buttonText = "GET STARTED",
  buttonLink = "/",
}: WebBreadcrumbProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="relative w-full  pt-8 pb-16 flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Dotted gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Breadcrumbs */}
      <div className="relative z-10 mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-800"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.length > 0 && <BreadcrumbSeparator />}

            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;
              const formattedName =
                name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");

              return (
                <BreadcrumbItem key={routeTo}>
                  {isLast ? (
                    <span className="text-gray-900 font-medium">
                      {formattedName}
                    </span>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        to={routeTo}
                        className="text-gray-500 hover:text-gray-800"
                      >
                        {formattedName}
                      </Link>
                    </BreadcrumbLink>
                  )}
                  {!isLast && <BreadcrumbSeparator />}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Title + Subtitle */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 capitalize">
          {title}
        </h1>
        <p className="text-gray-500 ">{subtitle}</p>
      </div>

      {/* CTA + Trusted Section */}
      <div className="relative z-10 flex items-center justify-center space-x-4">
        {buttonText && buttonLink && (
          <Button
            asChild
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-xl shadow-md transition-all"
          >
            <Link to={buttonLink} className="flex items-center">
              {buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        )}

        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="flex items-center justify-center space-x-2 text-gray-600 p-0">
            <CheckCircle2 className="text-green-500 w-5 h-5" />
            <span>Trusted by 10K+ Users</span>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
