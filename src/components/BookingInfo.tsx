
import React from 'react';

const BookingInfo: React.FC = () => {
  return (
    <div className="bg-muted p-8 rounded-lg">
      <h4 className="text-xl font-bold mb-4 text-foreground">BOOKING INFORMATION</h4>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>• 48-hour notice required for bookings</p>
        <p>• Travel fees apply for locations over 30 miles</p>
        <p>• Deposit required to secure your date</p>
        <p>• Bridal trials recommended 2-3 months before wedding</p>
        <p>• Group bookings receive special pricing</p>
      </div>
    </div>
  );
};

export default BookingInfo;
