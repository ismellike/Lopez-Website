using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Lopez_Website.Controllers
{
    [Route("api/[controller]")]
    public class VehiclesController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Vehicle> FetchVehicles()
        {
            //connect to database query vehicles find pictures
            return new List<Vehicle>() { new Vehicle() };
        }
    }
}