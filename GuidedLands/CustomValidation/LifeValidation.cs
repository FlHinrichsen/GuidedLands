namespace GuidedLands.CustomValidation
***REMOVED***
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data;
  using GuidedLands.Data.DataObjects;

  public class LifeValidation : ValidationAttribute
  ***REMOVED***
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    ***REMOVED***
      Race race = (Race)validationContext.ObjectInstance;
      ApplicationDbContext dbService = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext))!;
      DataFiguresizevalue figureSizeValue = dbService.DataFiguresizevalues.First(figureSizeValue => figureSizeValue.FiguresizeId == race.DataFiguresizeId);
      DataFiguresize figureSize = dbService.DataFiguresizes.First(figureSize => figureSize.Id == race.DataFiguresizeId);
      string size = figureSize.Text;
      int low = figureSizeValue.LifeLow;
      int high = figureSizeValue.LifeHigh;


      if (race.DataLifevalueLife < low)
      ***REMOVED***
        return new ValidationResult("Verletzungs Wert muss für " + size + " mindestens " + low + " betragen.");
  ***REMOVED***

      if (race.DataLifevalueLife > high)
      ***REMOVED***
        return new ValidationResult("Verletzungs Wert darf für " + size + " maximal " + high + " betragen.");
  ***REMOVED***      
      
      if (race.DataLifevalueLife > race.DataInjuryvalueInjury + 1)
      ***REMOVED***
        return new ValidationResult("Leben Wert darf Verletzungswert + 1 (" + (race.DataInjuryvalueInjury + 1) + ") nicht übersteigen.");
  ***REMOVED***

      return ValidationResult.Success;
***REMOVED***
  ***REMOVED***
***REMOVED***
