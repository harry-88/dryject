"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface NewJobEntry {
  jobId: string;
  date: Date;
  invoiceNumber: string;
  state: string;
  customer: string;
  jobContact: string;
  email: string;
  phone: string;
  privateGolfArea: number;
  publicGolfArea: number;
  sportsFieldOther: number;
  squareFeetCharge: number;
  collectedDollars: number;
  profileSupplier: number;
  amendment: string;
  profileTons: number;
  comment: string;
}

const NewJobEntry = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewJobEntry>();

  const onSubmit = handleSubmit((entries) => {
    console.log(entries.date)
    console.log(entries.invoiceNumber)
    console.log(entries.state)
    console.log(entries.customer)
    console.log(entries.jobContact)
    console.log(entries.email)
    console.log(entries.phone)
    console.log(entries.privateGolfArea)
    console.log(entries.publicGolfArea)
    console.log(entries.sportsFieldOther)
    console.log(entries.squareFeetCharge)
    console.log(entries.collectedDollars)
    console.log(entries.profileSupplier)
    console.log(entries.amendment)
    console.log(entries.profileTons)
    console.log(entries.comment)
  });

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-4/5 h-w/5">
        <p className="border-b border-dryject-green">Job Id</p>
        <input
          type="date"
          placeholder="Date"
          className="border-b border-dryject-green"
          {...register("date", {
            required: { value: true, message: "Please enter a valid date" },
          })}
        />
        {errors.date && (
            <span className="error-label text-xs">{errors.date.message}</span>
        )}
        <input
          type="number"
          placeholder="Invoice Number"
          className="border-b border-dryject-green"
          {...register("invoiceNumber", {
            required: {value: true, message: "Enter a valid invoice number"
          }})}
        />
        {errors.invoiceNumber && (
            <span className="error-label text-sm">{errors.invoiceNumber.message}</span>
        )}
        <div>
        <input
          type="text"
          placeholder="State"
          className="border-b border-dryject-green"
          {...register("state", {
            required: {value: true, message: "Enter a valid State"
            }})}
        />
        {errors.state && (
            <span className="error-label text-sm">{errors.state.message}</span>
        )}
        </div>
        <input
          type="text"
          placeholder="Customer"
          className="border-b border-dryject-green"
          {...register("customer", {
            required: {value: true, message: "Enter a valid Customer"
            }})}
        />
        {errors.customer && (
            <span className="error-label text-">{errors.customer.message}</span>
        )}
        <div className="flex flex-col">
        <input
          type="text"
          placeholder="Job Contact"
          className="border-b border-dryject-green"
          {...register("jobContact", {
            required: {value: true, message: "Enter a valid Job Contact"
            }})}
        />
        {errors.jobContact && (
            <span className="error-label text-sm">{errors.jobContact.message}</span>
        )}
        </div>
        <input
          type="text"
          placeholder="Email"
          className="border-b border-dryject-green"
          {...register("email", {
            required: {value: true, message: "Enter a valid Email Address"
            }})}
        />
        {errors.email && (
            <span className="error-label">{errors.email.message}</span>
        )}
        <input
          type="text"
          placeholder="Phone"
          className="border-b border-dryject-green"
          {...register("phone", {
            required: {value: true, message: "Enter a valid Phone Number"
            }})}
        />
        {errors.phone && (
            <span className="error-label">{errors.phone.message}</span>
        )}
        <input
          type="number"
          placeholder="Private Golf Area"
          className="border-b border-dryject-green"
          {...register("privateGolfArea", {
            required: {value: true, message: "Enter a valid Private Golf Area in square feet"
            }})}
        />
        {errors.privateGolfArea && (
            <span className="error-label">{errors.privateGolfArea.message}</span>
        )}
        <input
          type="number"
          placeholder="Public Golf Area"
          className="border-b border-dryject-green"
          {...register("publicGolfArea", {
            required: {value: true, message: "Enter a valid Public Golf Area in square feet"
            }})}
        />
        {errors.publicGolfArea && (
            <span className="error-label">{errors.publicGolfArea.message}</span>
        )}
        <input
          type="number"
          placeholder="Sports Field & Other (sqft)"
          className="border-b border-dryject-green"
          {...register("sportsFieldOther", {
            required: {value: true, message: "Enter a valid Sports & Other in square feet"
            }})}
        />
        {errors.sportsFieldOther && (
            <span className="error-label">{errors.sportsFieldOther.message}</span>
        )}
        <input
          type="number"
          placeholder="Sq Ft Charge"
          className="border-b border-dryject-green"
          {...register("squareFeetCharge", {
            required: {value: true, message: "Enter a valid Square Feet Charge"
            }})}
        />
        {errors.squareFeetCharge && (
            <span className="error-label">{errors.squareFeetCharge.message}</span>
        )}
        <input
          type="number"
          placeholder="Collected $"
          className="border-b border-dryject-green"
          {...register("collectedDollars", {
            required: {value: true, message: "Enter valid Collected Dollars"
            }})}
        />
        {errors.collectedDollars && (
            <span className="error-label">{errors.collectedDollars.message}</span>
        )}
        <input
          type="number"
          placeholder="Profile Supplier"
          className="border-b border-dryject-green"
          {...register("profileSupplier", {
            required: {value: true, message: "Enter a valid Profile Supplier"
            }})}
        />
        {errors.profileSupplier && (
            <span className="error-label">{errors.profileSupplier.message}</span>
        )}
        <input
          type="string"
          placeholder="Amendment"
          className="border-b border-dryject-green"
          {...register("amendment", {
            required: {value: true, message: "Enter a valid Amendment"
            }})}
        />
        {errors.amendment && (
            <span className="error-label">{errors.amendment.message}</span>
        )}
        <input
          type="number"
          placeholder="Profile Tons"
          className="border-b border-dryject-green"
          {...register("profileTons", {
            required: {value: true, message: "Enter a valid value for Profile Tons"
            }})}
        />
        {errors.profileTons && (
            <span className="error-label">{errors.profileTons.message}</span>
        )}
        <input
          type="string"
          placeholder="Comments"
          className="border-b border-dryject-green"
          {...register("comment", {
            required: {value: true, message: "Enter a valid Comment"
            }})}
        />
        {errors.comment && (
            <span className="error-label">{errors.comment.message}</span>
        )}
        <button type="submit" className="text-left border border-dryject-green p-4 w-[5.5rem]">Submit</button>
      </form>
    </div>
  );
};

export default NewJobEntry;
