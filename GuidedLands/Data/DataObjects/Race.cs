#nullable disable

namespace GuidedLands.Data.DataObjects
***REMOVED***
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.CustomValidation;

  public class Race
    ***REMOVED***
        public int Id ***REMOVED*** get; set; ***REMOVED***

        [Required]
        public string Name ***REMOVED*** get; set; ***REMOVED***
    
        [Required]
        public int DataFiguresizeId ***REMOVED*** get; set; ***REMOVED***
    
        [Required, DeathValidation]
        public int DataDeathvalueDeath ***REMOVED*** get; set; ***REMOVED***
    
        [Required, InjuryValidation]
        public int DataInjuryvalueInjury ***REMOVED*** get; set; ***REMOVED***
    
        [Required, LifeValidation]
        public int DataLifevalueLife ***REMOVED*** get; set; ***REMOVED***
    
        [Required, InitiativeValidation]
        public int DataInitiativevalueInitiative ***REMOVED*** get; set; ***REMOVED***

        [Required, WeightValidation]
        public int Weight11 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight10 ***REMOVED*** get; set; ***REMOVED***
    
        [WeightValidation, Required]
        public int Weight9 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight8 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight7 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight6 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight5 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight4 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight3 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight2 ***REMOVED*** get; set; ***REMOVED***

        [WeightValidation, Required]
        public int Weight1 ***REMOVED*** get; set; ***REMOVED***

        public virtual int WeightPrice
        ***REMOVED***
          get
          ***REMOVED***
            int sumWeight = Weight1 + Weight2 + Weight3 + Weight4 + Weight5 + Weight6 + Weight7 + Weight8 + Weight9 + Weight10 + Weight11;
            return sumWeight / 10;
      ***REMOVED***
    ***REMOVED***

        public virtual int RacePrice
        ***REMOVED***
          get
          ***REMOVED***
            if (DataDeathvalueDeathNavigation == null || DataFiguresize == null || DataInitiativevalueInitiativeNavigation == null || DataInjuryvalueInjuryNavigation == null
                || DataLifevalueLifeNavigation == null)
            ***REMOVED***
              return 0;
        ***REMOVED***
            int sum = DataDeathvalueDeathNavigation.Price;
            sum += DataFiguresize.DataFiguresizevalue.Price;
            sum += DataInitiativevalueInitiativeNavigation.Price;
            sum += DataInjuryvalueInjuryNavigation.Price;
            sum += DataLifevalueLifeNavigation.Price;
            sum += WeightPrice;
            sum -= 30;
            if (sum < 15)
            ***REMOVED***
              sum = 15;
        ***REMOVED***
            return sum;
      ***REMOVED***
    ***REMOVED***

        public virtual DataDeathvalue DataDeathvalueDeathNavigation ***REMOVED*** get; set; ***REMOVED***
        public virtual DataFiguresize DataFiguresize ***REMOVED*** get; set; ***REMOVED***
        public virtual DataInitiativevalue DataInitiativevalueInitiativeNavigation ***REMOVED*** get; set; ***REMOVED***
        public virtual DataInjuryvalue DataInjuryvalueInjuryNavigation ***REMOVED*** get; set; ***REMOVED***
        public virtual DataLifevalue DataLifevalueLifeNavigation ***REMOVED*** get; set; ***REMOVED***
***REMOVED***
***REMOVED***
