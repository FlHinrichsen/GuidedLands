namespace GuidedLands.CustomValidation
***REMOVED***
  using System.ComponentModel.DataAnnotations;

  using GuidedLands.Data.DataObjects;

  public class WeightValidation : ValidationAttribute
  ***REMOVED***
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    ***REMOVED***
      Race race = (Race)validationContext.ObjectInstance;
      return validationContext.MemberName switch
      ***REMOVED***
        "Weight1" => Validate(race.Weight1, 30),
        "Weight2" => Validate(race.Weight2, race.Weight1),
        "Weight3" => Validate(race.Weight3, race.Weight2),
        "Weight4" => Validate(race.Weight4, race.Weight3),
        "Weight5" => Validate(race.Weight5, race.Weight4),
        "Weight6" => Validate(race.Weight6, race.Weight5),
        "Weight7" => Validate(race.Weight7, race.Weight6),
        "Weight8" => Validate(race.Weight8, race.Weight7),
        "Weight9" => Validate(race.Weight9, race.Weight8),
        "Weight10" => Validate(race.Weight10, race.Weight9),
        "Weight11" => Validate(race.Weight11, race.Weight10),
        _ => ValidationResult.Success
  ***REMOVED***;
***REMOVED***

    private ValidationResult? Validate(int weight, int previous)
    ***REMOVED***
      if (weight > 30)
      ***REMOVED***
        return new ValidationResult("Reichweite muss kleiner oder gleich 30 sein");
  ***REMOVED***

      if (weight < previous - 4)
      ***REMOVED***
        return new ValidationResult("Reichweite darf maximal um 4 kleiner werden.");
  ***REMOVED***

      if (weight > previous)
      ***REMOVED***
        return new ValidationResult("Reichweite darf nicht größer werden.");
  ***REMOVED***

      if (weight < 0)
      ***REMOVED***
        return new ValidationResult("Reichweite muss mindestens 0 sein");
  ***REMOVED***

      return ValidationResult.Success;
***REMOVED***
  ***REMOVED***
***REMOVED***
