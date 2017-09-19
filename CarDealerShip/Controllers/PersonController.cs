using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Services;
using Domain;

namespace CarDealerShip.Controllers
{
    public class PersonController : ApiController
    {

        public IEnumerable<Person> GetSalesMen()
        {
            var personService = new SalesMenService();

            return personService.GetAllSalesMen();
        }
    }
}
