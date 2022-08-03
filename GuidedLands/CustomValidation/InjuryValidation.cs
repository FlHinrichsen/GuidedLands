namespace GuidedLands.CustomValidation
***REMOVED***
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data;
  using GuidedLands.Data.DataObjects;

  public class InjuryValidation : ValidationAttribute
  ***REMOVED***
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    ***REMOVED***
      Race race = (Race)validationContext.ObjectInstance;
      ApplicationDbContext dbService = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext))!;
      DataFiguresizevalue figureSizeValue = dbService.DataFiguresizevalues.First(figureSizeValue => figureSizeValue.FiguresizeId == race.DataFiguresizeId);
      DataFiguresize figureSize = dbService.DataFiguresizes.First(figureSize => figureSize.Id == race.DataFiguresizeId);
      string size = figureSize.Text;
      int low = figureSizeValue.InsuryLow;
      int high = figureSizeValue.InsuryHigh;
      
      if (race.DataInjuryvalueInjury < low)
      ***REMOVED***
        return new ValidationResult("Verletzungs Wert muss für " + size + " mindestens " + low + " betragen.");
  ***REMOVED***

      if (race.DataInjuryvalueInjury > high)
      ***REMOVED***
        return new ValidationResult("Verletzungs Wert darf für " + size + " maximal " + high + " betragen.");
  ***REMOVED***

      return ValidationResult.Success;
***REMOVED***
  ***REMOVED***
***REMOVED***
