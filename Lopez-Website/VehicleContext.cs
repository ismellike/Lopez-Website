using Microsoft.EntityFrameworkCore;

namespace Lopez_Website
{
    public class VehicleContext : DbContext
    {
        public DbSet<Vehicle> Vehicles;

        public VehicleContext(DbContextOptions<VehicleContext> options)
            : base(options)
        { }
    }
}