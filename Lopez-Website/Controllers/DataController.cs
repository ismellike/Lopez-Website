using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Lopez_Website.Controllers
{
    [Route("api/[controller]")]
    public class StorageController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Vehicle> VehicleList()
        {
            //connect to database query vehicles find pictures
            return null;
        }
    }
}