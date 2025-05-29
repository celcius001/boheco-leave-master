import CardComponents from "../CardComponents";
import { Button } from "../ui/button";

function LeaveDashboard() {
  return (
    <div className="h-screen w-full overflow-hidden p-4">
      <div className="font-bold">Leave Dashboard</div>
      <div className="py-4">
        <Button variant={"outline"}>
          <a href="/leave">Apply Leave</a>
        </Button>
      </div>
      <div className="flex gap-4">
        <CardComponents
          title="Vacation"
          value="5"
          bgColor="bg-gradient-to-r from-blue-600 to-blue-800"
        />
        <CardComponents
          title="Sick"
          value="5"
          bgColor="bg-gradient-to-r from-green-500 to-green-700"
        />
        <CardComponents
          title="NEA"
          value="5"
          bgColor="bg-gradient-to-r from-yellow-400 to-yellow-600"
        />
        <CardComponents
          title="Others"
          value="5"
          bgColor="bg-gradient-to-r from-gray-400 to-gray-600"
        />
      </div>
    </div>
  );
}

export default LeaveDashboard;
