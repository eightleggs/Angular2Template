using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace DataAccess
{
    public interface IPersonRepository
    {
         IEnumerable<Person> GetAllPersonnel();
    }

    public class PersonRepository
    {
       

       public IEnumerable<Person> GetAllPersonnel()
        {
            var person = new Person { Name = "Andy", Title = "Sales Manager" };

            var result = new List<Person>();
            result.Add(person);
            return result;
        }
    }
}
