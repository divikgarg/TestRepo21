using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public List<User> UsersList { get; set; }
        public List<User> SampleList { get {
                return new List<User> {
                new User {Id = 1,First_Name = "FName_1",Last_Name= "LName_1", age = 10 },
                new User {Id = 2,First_Name = "FName_2",Last_Name= "LName_2", age = 20 },
                new User {Id = 3,First_Name = "FName_3",Last_Name= "LName_3", age = 30 },
                new User {Id = 4,First_Name = "FName_4",Last_Name= "LName_4", age = 40 },
                new User {Id = 5,First_Name = "FName_5",Last_Name= "LName_5", age = 50 },
                new User {Id = 6,First_Name = "FName_6",Last_Name= "LName_6", age = 60 },
                new User {Id = 7,First_Name = "FName_7",Last_Name= "LName_7", age = 70 },
            };
            } 
            }

        public UserController()
        {
            UsersList = SampleList;
        }


        [HttpGet("GetUsers")]
        public IEnumerable<User> Get()
        {
            using (var obj = new ClassTechInterfaceImpl())
            { 
                //so Operation
            }
                //int
                ClassTechGeneric<int> objInt = new ClassTechGeneric<int>();
            var ij = objInt.Result(1, 2);

            //float
            ClassTechGeneric<double> objfloat = new ClassTechGeneric<double>();
            var ijfloat = objfloat.Result(1.1, 2.4);

            //string

            ClassTechGeneric<string> objstring = new ClassTechGeneric<string>();
            var ijobjstring = objstring.Result("A1", "_A2");

            return UsersList;
        }

        [HttpPost("AddUser")]
        public IActionResult Post(User user)
        {
            user.Id = UsersList.Max(x => x.Id) + 1;
            UsersList.Add(user);
            return this.Ok();
        }
    }
}
