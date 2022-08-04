#nullable disable

namespace GuidedLands.Data.DataObjects
{
  using System.Collections.Generic;

  public class DataLifevalue
    {
        public DataLifevalue()
        {
            Races = new HashSet<Race>();
        }

        public int Life { get; set; }
        public int Price { get; set; }

        public virtual ICollection<Race> Races { get; set; }
    }
}
