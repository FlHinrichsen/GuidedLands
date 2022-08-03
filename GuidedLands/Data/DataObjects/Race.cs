#nullable disable

namespace GuidedLands.Data.DataObjects
{
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.CustomValidation;

  public class Race
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    
        [Required]
        public int DataFiguresizeId { get; set; }
    
        [Required, DeathValidation]
        public int DataDeathvalueDeath { get; set; }
    
        [Required, InjuryValidation]
        public int DataInjuryvalueInjury { get; set; }
    
        [Required, LifeValidation]
        public int DataLifevalueLife { get; set; }
    
        [Required, InitiativeValidation]
        public int DataInitiativevalueInitiative { get; set; }

        [Required, WeightValidation]
        public int Weight11 { get; set; }

        [WeightValidation, Required]
        public int Weight10 { get; set; }
    
        [WeightValidation, Required]
        public int Weight9 { get; set; }

        [WeightValidation, Required]
        public int Weight8 { get; set; }

        [WeightValidation, Required]
        public int Weight7 { get; set; }

        [WeightValidation, Required]
        public int Weight6 { get; set; }

        [WeightValidation, Required]
        public int Weight5 { get; set; }

        [WeightValidation, Required]
        public int Weight4 { get; set; }

        [WeightValidation, Required]
        public int Weight3 { get; set; }

        [WeightValidation, Required]
        public int Weight2 { get; set; }

        [WeightValidation, Required]
        public int Weight1 { get; set; }

        public virtual int WeightPrice
        {
          get
          {
            int sumWeight = Weight1 + Weight2 + Weight3 + Weight4 + Weight5 + Weight6 + Weight7 + Weight8 + Weight9 + Weight10 + Weight11;
            return sumWeight / 10;
          }
        }

        public virtual int RacePrice
        {
          get
          {
            if (DataDeathvalueDeathNavigation == null || DataFiguresize == null || DataInitiativevalueInitiativeNavigation == null || DataInjuryvalueInjuryNavigation == null
                || DataLifevalueLifeNavigation == null)
            {
              return 0;
            }
            int sum = DataDeathvalueDeathNavigation.Price;
            sum += DataFiguresize.DataFiguresizevalue.Price;
            sum += DataInitiativevalueInitiativeNavigation.Price;
            sum += DataInjuryvalueInjuryNavigation.Price;
            sum += DataLifevalueLifeNavigation.Price;
            sum += WeightPrice;
            sum -= 30;
            if (sum < 15)
            {
              sum = 15;
            }
            return sum;
          }
        }

        public virtual DataDeathvalue DataDeathvalueDeathNavigation { get; set; }
        public virtual DataFiguresize DataFiguresize { get; set; }
        public virtual DataInitiativevalue DataInitiativevalueInitiativeNavigation { get; set; }
        public virtual DataInjuryvalue DataInjuryvalueInjuryNavigation { get; set; }
        public virtual DataLifevalue DataLifevalueLifeNavigation { get; set; }
    }
}
