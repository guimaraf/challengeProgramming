using System;

namespace _01_oneToHundredNotNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int one = Convert.ToInt32(true);
            string total = one.ToString() + Convert.ToInt32(false).ToString() + Convert.ToInt32(false).ToString();           

            for (int i = one; i < Convert.ToInt32(total) + one; i++)
            {
                Console.WriteLine(i);
            }
            Console.ReadLine();
        }
    }
}
