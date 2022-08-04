#nullable disable

namespace GuidedLands.Data.DataObjects
{
  using System.Collections.Generic;

  public class DataInitiativevalue
    {
        public DataInitiativevalue()
        {
            Races = new HashSet<Race>();
        }

        public int Initiative { get; set; }
        public int Price { get; set; }

        public virtual ICollection<Race> Races { get; set; }
    }
}
