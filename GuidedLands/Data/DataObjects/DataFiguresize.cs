#nullable disable

namespace GuidedLands.Data.DataObjects
***REMOVED***
  using System.Collections.Generic;

  public class DataFiguresize
    ***REMOVED***
        public DataFiguresize()
        ***REMOVED***
            Races = new HashSet<Race>();
    ***REMOVED***

        public int Id ***REMOVED*** get; set; ***REMOVED***
        public float Low ***REMOVED*** get; set; ***REMOVED***
        public float High ***REMOVED*** get; set; ***REMOVED***
        public string Text ***REMOVED*** get; set; ***REMOVED***

        public virtual DataFiguresizevalue DataFiguresizevalue ***REMOVED*** get; set; ***REMOVED***
        public virtual ICollection<Race> Races ***REMOVED*** get; set; ***REMOVED***
***REMOVED***
***REMOVED***
