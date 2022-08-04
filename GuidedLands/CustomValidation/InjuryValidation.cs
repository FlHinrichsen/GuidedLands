namespace GuidedLands.CustomValidation
{
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data;
  using GuidedLands.Data.DataObjects;

  public class InjuryValidation : ValidationAttribute
  {
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
      Race race = (Race)validationContext.ObjectInstance;
      ApplicationDbContext dbService = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext))!;
      DataFiguresizevalue figureSizeValue = dbService.DataFiguresizevalues.First(figureSizeValue => figureSizeValue.FiguresizeId == race.DataFiguresizeId);
      DataFiguresize figureSize = dbService.DataFiguresizes.First(figureSize => figureSize.Id == race.DataFiguresizeId);
      string size = figureSize.Text;
      int low = figureSizeValue.InsuryLow;
      int high = figureSizeValue.InsuryHigh;
      
      if (race.DataInjuryvalueInjury < low)
      {
        return new ValidationResult("Verletzungs Wert muss für " + size + " mindestens " + low + " betragen.");
      }

      if (race.DataInjuryvalueInjury > high)
      {
        return new ValidationResult("Verletzungs Wert darf für " + size + " maximal " + high + " betragen.");
      }

      return ValidationResult.Success;
    }
  }
}
