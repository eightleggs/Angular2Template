using System;
using System.Collections.Generic;
using System.Text;
using Domain;
namespace Services
{
    public interface ISalesMenService
    {
        IEnumerable<Person> GetAllSalesMen();
    }


    public class SalesMenService:ISalesMenService
    {
        public SalesMenService()
        {
        }

        public IEnumerable<Person> GetAllSalesMen()
        {

            var saleman1 = new Person() { Name = "Andy", Title = "Sales Man" };
            var saleman2 = new Person() { Name = "Robert", Title = "Internet Sales Man" };

            var result = new List<Person>() { saleman1, saleman2 };
            return result;
        }
    }
}
