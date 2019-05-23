using System;

namespace Lopez_Website
{
    public class Vehicle
    {
        public int VehicleId { get; set; }
        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int? Mileage { get; set; }
        public string VIN { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public DateTime ListDate { get; set; }
        public bool Salvage { get; set; }

        /// <summary>
        /// These variables below may or may not be set depending on vin decoding
        /// Used for sorting
        /// </summary>

        public string VehicleType { get; set; }
        public int NumDoors { get; set; }
        public string DriveType { get; set; }
        public int NumCylinders { get; set; }
        //Extra info will be loaded from JSON
        public int ExtraData { get; set; } //CSV entries of extra data ex Transmission=Automatic,Fuel=Gasoline

        public string Name
        {
            get { return Year.ToString() + ' ' + Make + ' ' + Model; }
        }
    }
}