namespace GuidedLands.CustomValidation
***REMOVED***
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data;
  using GuidedLands.Data.DataObjects;

  public class DeathValidation : ValidationAttribute
  ***REMOVED***
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    ***REMOVED***
      Race race = (Race)validationContext.ObjectInstance;
      ApplicationDbContext dbService = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext))!;
      DataFiguresizevalue figureSizeValue = dbService.DataFiguresizevalues.First(figureSizeValue => figureSizeValue.FiguresizeId == race.DataFiguresizeId);
      DataFiguresize figureSize = dbService.DataFiguresizes.First(figureSize => figureSize.Id == race.DataFiguresizeId);
      string size = figureSize.Text;
      int low = figureSizeValue.DeathLow;
      int high = figureSizeValue.DeathHigh;


      if (race.DataDeathvalueDeath < low)
      ***REMOVED***
        return new ValidationResult("Tod Wert muss für " + size + " mindestens " + low + " betragen.");
  ***REMOVED***

      if (race.DataDeathvalueDeath > high)
      ***REMOVED***
        return new ValidationResult("Tod Wert darf für " + size + " maximal " + high + " betragen.");
  ***REMOVED***

      return ValidationResult.Success;
***REMOVED***
  ***REMOVED***
***REMOVED***
