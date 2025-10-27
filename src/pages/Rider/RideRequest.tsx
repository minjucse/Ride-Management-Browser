import { useState } from "react";
import { useRequestRideMutation } from "@/redux/features/rider/rideApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function RideRequest() {
  const [pickupAddress, setPickupAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [requestRide, { isLoading }] = useRequestRideMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // for now, just send addresses — backend can geocode them
      const body = {
        pickupLocation: { address: pickupAddress },
        destinationLocation: { address: destinationAddress },
      };

      await requestRide(body).unwrap();

      toast.success("🚗 Ride requested successfully! A driver will be assigned soon.");

      setPickupAddress("");
      setDestinationAddress("");
    } catch (error: any) {
      toast.error(error?.data?.message || "❌ Ride request failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-50 min-h-screen">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Request a Ride
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Pickup Address */}
            <div>
              <Label htmlFor="pickup">Pickup Location</Label>
              <Input
                id="pickup"
                type="text"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
                placeholder="Enter pickup address (e.g. Mohammadpur)"
                required
              />
            </div>

            {/* Destination Address */}
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                type="text"
                value={destinationAddress}
                onChange={(e) => setDestinationAddress(e.target.value)}
                placeholder="Enter destination address (e.g. Banani)"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Requesting..." : "Request Ride"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
