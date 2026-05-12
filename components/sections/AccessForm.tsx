"use client";

import { useState } from "react";

import { copy } from "@/lib/copy";

interface FieldProps {
  id: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
}

function Field({ id, label, type = "text", required = true }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={label}
        autoComplete={
          type === "email" ? "email" : id === "name" ? "name" : "organization"
        }
        className="border-0 border-b border-solid border-hair bg-transparent py-3 text-[16px] font-normal text-ink placeholder:text-mist focus-visible:border-ink focus-visible:outline-none focus-visible:[border-bottom-width:0.5px] [border-bottom-width:0.5px]"
      />
    </div>
  );
}

export function AccessForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid grid-cols-12 gap-x-6 gap-y-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      noValidate={false}
    >
      <div className="col-span-12 md:col-span-6">
        <Field id="name" label={copy.access.form.name} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Field id="firm" label={copy.access.form.firm} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Field id="email" label={copy.access.form.email} type="email" />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Field id="role" label={copy.access.form.role} />
      </div>
      <div className="col-span-12">
        <label htmlFor="why" className="sr-only">
          {copy.access.form.why}
        </label>
        <textarea
          id="why"
          name="why"
          rows={4}
          required
          placeholder={copy.access.form.why}
          className="w-full resize-y border-0 border-b border-solid border-hair bg-transparent py-3 text-[16px] font-normal text-ink placeholder:text-mist focus-visible:border-ink focus-visible:outline-none focus-visible:[border-bottom-width:0.5px] [border-bottom-width:0.5px]"
        />
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          className="rounded-full bg-ink px-8 py-3 text-[14px] font-normal text-paper transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {copy.access.form.submit}
        </button>
      </div>
      {submitted ? (
        <p className="col-span-12 text-[14px] font-normal text-ink" role="status">
          {copy.access.form.success}
        </p>
      ) : null}
    </form>
  );
}
