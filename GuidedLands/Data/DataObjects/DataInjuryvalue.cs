#nullable disable

namespace GuidedLands.Data.DataObjects
{
  using System.Collections.Generic;

  public class DataInjuryvalue
    {
        public DataInjuryvalue()
        {
            Races = new HashSet<Race>();
        }

        public int Injury { get; set; }
        public int Price { get; set; }

        public virtual ICollection<Race> Races { get; set; }
    }
}
