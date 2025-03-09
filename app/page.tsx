"use server";

import { Suspense } from "react";
import { ApplyChangesForm } from "./_components/apply-changes-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="max-w-xl w-full mx-auto mt-10">
        <CardHeader>
          <CardTitle>XML Parser</CardTitle>
        </CardHeader>
        <CardContent>
          <ApplyChangesForm />
        </CardContent>
      </Card>
    </Suspense>
  );
}
