using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vz.MegaHack.Entities
{
    public class KPIScoreInfo
    {
        public string Score { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public bool HasTrained { get; set; }
    }
}
