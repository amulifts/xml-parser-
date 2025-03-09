"use client";
import { applyChangesAction } from "@/actions/apply-changes-actions";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ApplyChangesForm() {
  const [xml, setXml] = useState("");
  const [projectDirectory, setProjectDirectory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [successMessage]);

  const handleApply = async () => {
    setErrorMessage("");
    if (!xml.trim()) {
      setErrorMessage("Please paste XML before applying changes.");
      return;
    }
    try {
      await applyChangesAction(xml, projectDirectory.trim());
      setXml("");
      setSuccessMessage("Changes applied successfully");
    } catch (error: any) {
      setErrorMessage(error?.message || "An error occurred while applying changes.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {errorMessage && (
        <Alert variant="destructive" className="relative">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
          <Button
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setErrorMessage("")}
          >
            X
          </Button>
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success" className="relative">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
          <Button
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setSuccessMessage("")}
          >
            X
          </Button>
        </Alert>
      )}
      <div className="flex flex-col">
        <Label htmlFor="projectDirectory" className="mb-2">
          Project Directory
        </Label>
        <Input
          id="projectDirectory"
          type="text"
          value={projectDirectory}
          onChange={(e) => setProjectDirectory(e.target.value)}
          placeholder="e.g. /Users/myusername/projects/xml-parser"
        />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="xml" className="mb-2">
          Paste XML here
        </Label>
        <Textarea
          id="xml"
          value={xml}
          onChange={(e) => setXml(e.target.value)}
          placeholder="Paste the <code_changes>...</code_changes> XML here"
          rows={12}
        />
      </div>
      <Button onClick={handleApply}>Apply</Button>
    </div>
  );
}