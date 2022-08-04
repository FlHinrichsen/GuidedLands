#nullable disable

namespace GuidedLands.Data.DataObjects
{
  public class DataFiguresizevalue
    {
        public int FiguresizeId { get; set; }
        public int DeathLow { get; set; }
        public int DeathHigh { get; set; }
        public int InsuryLow { get; set; }
        public int InsuryHigh { get; set; }
        public int LifeLow { get; set; }
        public int LifeHigh { get; set; }
        public int Initiative { get; set; }
        public int Price { get; set; }

        public virtual DataFiguresize Figuresize { get; set; }
    }
}
