import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import { Calendar } from "../components/ui/calendar";
import FormInput from "../components/forms/FormInput";
import FormSelect from "../components/forms/FormSelect";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { format } from "date-fns";

function LeaveFormPage() {
  const img = ["logo.png"];
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);
  const today = new Date();

  const countDays = () => {
    if (dateFrom && dateTo) {
      const diffTime = Math.abs(dateTo.getTime() - dateFrom.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1);
      return diffDays;
    }
    return 0;
  };

  const [formData, setFormData] = useState({
    id: "",
    leaveType: "",
    reason: "",
    prepared: "",
    manager: "",
    applicationDate: format(today, "PPP"),
    dateFrom: "",
    dateTo: "",
    days: "",
    divisionChief: "",
    generalManager: "Eugnio R. Tan",
  });

  //TODO:: get data from API
  // const [dataFromAPI, setDataFromAPI] = useState(null);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const combinedData = {
      ...formData,
      dateFrom: dateFrom ? format(dateFrom, "PPP") : "",
      dateTo: dateTo ? format(dateTo, "PPP") : "",
      days: countDays(),
    };
    // Handle form submission logic here

    console.log("Form submitted:", combinedData);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-center gap-4">
        <img src={img[0]} alt="logo" width={50} height={50} />
        <div className="flex flex-col items-center">
          <div>BOHOL II ELECTRIC COOPERATIVE INC.</div>
          <div>Cantagay, Jagna, Bohol</div>
        </div>
      </div>
      {/* Title */}
      <div className="flex items-center justify-center pt-4 font-bold">
        REQUEST FOR LEAVE / VACATION / SICK LEAVE
      </div>
      {/* Subtitle */}
      <div className="p-4">TO: HUMAN RESOURCE & ADMINISTRATOR DIVISIOR</div>

      {/* Forms */}
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-around gap-4 p-4 md:flex-row">
          {/* LEFT Section */}
          <section className="flex flex-col gap-2">
            {/* Application */}
            <FormInput
              label="Application"
              type="text"
              name="application"
              disabled={true}
            />

            {/* ID */}
            <FormInput
              label="Id"
              type="text"
              name="id"
              disabled={false}
              onChange={handleInputChange}
            />
            {/* Name */}
            <FormInput label="Name" type="text" name="name" disabled={true} />
            {/* Leave Type */}
            <FormSelect
              label={"Leave Type"}
              name="leaveType"
              onChange={handleInputChange}
              slabel="Select Leave Type"
              select={["Vacation Leave", "Sick Leave", "Others"]}
            />
            {/* Leave Balance */}
            <FormInput
              label="Leave Balance"
              type="text"
              name="balance"
              disabled={true}
            />
            <div className="flex w-full max-w-sm items-center gap-2 space-x-2 p-2">
              <Label htmlFor="reason" className="w-52">
                Reason
              </Label>
              <Textarea
                className="rounded bg-white px-4 py-2 dark:text-black"
                name="reason"
                onChange={(e) => handleInputChange("reason", e.target.value)}
                required
              />
            </div>
            <FormInput
              label="Prepared By"
              type="text"
              name="prepared"
              disabled={false}
              onChange={handleInputChange}
            />
            <FormSelect
              label={"Department Manager"}
              name="manager"
              onChange={handleInputChange}
              slabel="Select Department Manager"
              select={[
                "Adrian Forones",
                "Ariel Torrejos",
                "Ellen Bayhon",
                "Noel Aleman",
                "Tito Andamon",
                "Others",
              ]}
            />
          </section>
          {/* RIGHT Section*/}
          <section className="flex flex-col gap-2">
            {/* Application Date */}
            <FormInput
              label="Application Date"
              type="text"
              name="applicationDate"
              disabled={true}
              value={format(today, "PPP")}
            />
            {/* Date From */}
            <div className="flex items-center gap-11">
              <Label htmlFor="reason" className="w-14 text-right">
                From
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex w-[280px] items-center justify-start text-left font-normal",
                      !dateFrom && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? (
                      format(dateFrom, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto rounded-md bg-white p-0 shadow-lg">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/* Date To */}
            <div className="flex items-center gap-11">
              <Label htmlFor="reason" className="w-14 text-right">
                To
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex w-[280px] items-center justify-start text-left font-normal",
                      !dateTo && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "PPP") : <span>Pick a date</span>}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto rounded-md bg-white p-0 shadow-lg">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/* No of Days */}
            <FormInput
              label="No of Days"
              type="text"
              name="days"
              disabled={true}
              value={countDays()}
            />
            <FormSelect
              label={"Division Chief"}
              name="divisionChief"
              onChange={handleInputChange}
              slabel="Select Division Chief"
              select={[
                "Anna Lou Galon",
                "Ericson Sayson",
                "Gilbert Pasaylo",
                "Jose Robert Dakoykoy",
                "Kethlene Joy Abcede",
                "Maricar Ochavo",
                "Nelson Ochavo",
                "Ramil Tiongson",
                "Samuel Bual",
                "Santiago Jamila",
                "Others",
              ]}
            />
            <FormInput
              label="General Manager"
              type="text"
              name="manager"
              disabled={true}
              value={"Eugnio R. Tan"}
            />
          </section>
        </div>
        <div className="flex justify-center gap-4 p-4">
          <Button
            type="submit"
            variant={"default"}
            className="w-32 rounded bg-green-500 text-white hover:bg-green-700"
          >
            Submit
          </Button>
        </div>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default LeaveFormPage;
