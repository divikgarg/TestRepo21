using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectApplication
{
    public static class StaticClassWithConstructor
    {
        static StaticClassWithConstructor()
        { 
        
        }
    }

    public class ClassTechInterfaceImpl : IDisposable
    {
        ~ClassTechInterfaceImpl()
        {
            this.Dispose();
        }
        public void Dispose()
        {
            //Clean Unmanaged Code
        }
    }
    public class ClassTechGeneric<T>
    {
        public T Result(T a, T b)
        {
            dynamic dx = a, dy = b;
            return dx + dy;
        }
    }
    public class ClassTech
    {
        public static string value;
        static ClassTech()
        {
            value = "From Static";
        }
        public ClassTech()
        {
            value = "From Static";
        }



    }
}
