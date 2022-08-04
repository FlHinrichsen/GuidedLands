#nullable disable

namespace GuidedLands.Data.DataObjects
{
  using System.Collections.Generic;

  public class DataDeathvalue
    {
        public DataDeathvalue()
        {
            Races = new HashSet<Race>();
        }

        public int Death { get; set; }
        public int Price { get; set; }

        public virtual ICollection<Race> Races { get; set; }
    }
}
