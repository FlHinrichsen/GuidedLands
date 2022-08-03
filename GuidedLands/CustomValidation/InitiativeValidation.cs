namespace GuidedLands.CustomValidation
***REMOVED***
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data;
  using GuidedLands.Data.DataObjects;

  public class InitiativeValidation : ValidationAttribute
  ***REMOVED***
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    ***REMOVED***
      Race race = (Race)validationContext.ObjectInstance;
      ApplicationDbContext dbService = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext))!;
      DataFiguresizevalue figureSizeValue = dbService.DataFiguresizevalues.First(figureSizeValue => figureSizeValue.FiguresizeId == race.DataFiguresizeId);
      int high = race.DataDeathvalueDeath + figureSizeValue.Initiative;
      
      return race.DataInjuryvalueInjury > high ? new ValidationResult("Initiative darf maximal " + high + " betragen.") : ValidationResult.Success;
***REMOVED***
  ***REMOVED***
***REMOVED***
