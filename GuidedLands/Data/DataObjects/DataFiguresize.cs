#nullable disable

namespace GuidedLands.Data.DataObjects
{
  using System.Collections.Generic;

  public class DataFiguresize
    {
        public DataFiguresize()
        {
            Races = new HashSet<Race>();
        }

        public int Id { get; set; }
        public float Low { get; set; }
        public float High { get; set; }
        public string Text { get; set; }

        public virtual DataFiguresizevalue DataFiguresizevalue { get; set; }
        public virtual ICollection<Race> Races { get; set; }
    }
}
