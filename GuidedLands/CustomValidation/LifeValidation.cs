namespace GuidedLands.CustomValidation
{
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data;
  using GuidedLands.Data.DataObjects;

  public class LifeValidation : ValidationAttribute
  {
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
      Race race = (Race)validationContext.ObjectInstance;
      ApplicationDbContext dbService = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext))!;
      DataFiguresizevalue figureSizeValue = dbService.DataFiguresizevalues.First(figureSizeValue => figureSizeValue.FiguresizeId == race.DataFiguresizeId);
      DataFiguresize figureSize = dbService.DataFiguresizes.First(figureSize => figureSize.Id == race.DataFiguresizeId);
      string size = figureSize.Text;
      int low = figureSizeValue.LifeLow;
      int high = figureSizeValue.LifeHigh;


      if (race.DataLifevalueLife < low)
      {
        return new ValidationResult("Verletzungs Wert muss für " + size + " mindestens " + low + " betragen.");
      }

      if (race.DataLifevalueLife > high)
      {
        return new ValidationResult("Verletzungs Wert darf für " + size + " maximal " + high + " betragen.");
      }      
      
      if (race.DataLifevalueLife > race.DataInjuryvalueInjury + 1)
      {
        return new ValidationResult("Leben Wert darf Verletzungswert + 1 (" + (race.DataInjuryvalueInjury + 1) + ") nicht übersteigen.");
      }

      return ValidationResult.Success;
    }
  }
}
