using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace MIS_Project.Models
{
    public class Password
    {
        public string password { get; set; }
        public string passwordHashed { get; set; }

        public Password()
        {
            password = "";
            passwordHashed = "";
        }

        public Password(string password)
        {
            this.password = password;
            byte[] salt = new byte[5] { 1, 2, 3, 4, 5 };
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));
            this.passwordHashed = hashed;
        }
    }
}
