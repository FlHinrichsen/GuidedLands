using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GuidedLands.Data;

namespace GuidedLands.Controllers
***REMOVED***
  using GuidedLands.Data.DataObjects;

  public class RacesController : Controller
    ***REMOVED***
        private readonly ApplicationDbContext _context;

        public RacesController(ApplicationDbContext context)
        ***REMOVED***
            _context = context;
    ***REMOVED***

        // GET: Races
        public async Task<IActionResult> Index()
        ***REMOVED***
            var applicationDbContext = _context.Races
              .Include(r => r.DataDeathvalueDeathNavigation)
              .Include(r => r.DataFiguresize)
              .Include(r => r.DataInitiativevalueInitiativeNavigation)
              .Include(r => r.DataInjuryvalueInjuryNavigation)
              .Include(r => r.DataLifevalueLifeNavigation)
              .Include( r => r.DataFiguresize.DataFiguresizevalue);
            return View(await applicationDbContext.ToListAsync());
    ***REMOVED***

        // GET: Races/Details/5
        public async Task<IActionResult> Details(int? id)
        ***REMOVED***
            if (id == null || _context.Races == null)
            ***REMOVED***
                return NotFound();
        ***REMOVED***

            var race = await _context.Races
                .Include(r => r.DataDeathvalueDeathNavigation)
                .Include(r => r.DataFiguresize)
                .Include(r => r.DataInitiativevalueInitiativeNavigation)
                .Include(r => r.DataInjuryvalueInjuryNavigation)
                .Include(r => r.DataLifevalueLifeNavigation)
                .Include( r => r.DataFiguresize.DataFiguresizevalue)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (race == null)
            ***REMOVED***
                return NotFound();
        ***REMOVED***

            return View(race);
    ***REMOVED***

        // GET: Races/Create
        public IActionResult Create()
        ***REMOVED***
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death");
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text");
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative");
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury");
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life");
            return View();
    ***REMOVED***

        // POST: Races/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,DataFiguresizeId,DataDeathvalueDeath,DataInjuryvalueInjury,DataLifevalueLife,DataInitiativevalueInitiative,Weight11,Weight10,Weight9,Weight8,Weight7,Weight6,Weight5,Weight4,Weight3,Weight2,Weight1")] Race race)
        ***REMOVED***
            if (ModelState.IsValid)
            ***REMOVED***
                _context.Add(race);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
        ***REMOVED***
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death", race.DataDeathvalueDeath);
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text", race.DataFiguresizeId);
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative", race.DataInitiativevalueInitiative);
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury", race.DataInjuryvalueInjury);
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life", race.DataLifevalueLife);
            return View(race);
    ***REMOVED***

        // GET: Races/Edit/5
        public async Task<IActionResult> Edit(int? id)
        ***REMOVED***
            if (id == null || _context.Races == null)
            ***REMOVED***
                return NotFound();
        ***REMOVED***

            var race = await _context.Races.FindAsync(id);
            if (race == null)
            ***REMOVED***
                return NotFound();
        ***REMOVED***
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death", race.DataDeathvalueDeath);
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text", race.DataFiguresizeId);
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative", race.DataInitiativevalueInitiative);
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury", race.DataInjuryvalueInjury);
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life", race.DataLifevalueLife);
            return View(race);
    ***REMOVED***

        // POST: Races/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,DataFiguresizeId,DataDeathvalueDeath,DataInjuryvalueInjury,DataLifevalueLife,DataInitiativevalueInitiative,Weight11,Weight10,Weight9,Weight8,Weight7,Weight6,Weight5,Weight4,Weight3,Weight2,Weight1")] Race race)
        ***REMOVED***
            if (id != race.Id)
            ***REMOVED***
                return NotFound();
        ***REMOVED***

            if (ModelState.IsValid)
            ***REMOVED***
                try
                ***REMOVED***
                    _context.Update(race);
                    await _context.SaveChangesAsync();
            ***REMOVED***
                catch (DbUpdateConcurrencyException)
                ***REMOVED***
                    if (!RaceExists(race.Id))
                    ***REMOVED***
                        return NotFound();
                ***REMOVED***
                    else
                    ***REMOVED***
                        throw;
                ***REMOVED***
            ***REMOVED***
                return RedirectToAction(nameof(Index));
        ***REMOVED***
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death", race.DataDeathvalueDeath);
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text", race.DataFiguresizeId);
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative", race.DataInitiativevalueInitiative);
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury", race.DataInjuryvalueInjury);
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life", race.DataLifevalueLife);
            return View(race);
    ***REMOVED***

        // GET: Races/Delete/5
        public async Task<IActionResult> Delete(int? id)
        ***REMOVED***
            if (id == null || _context.Races == null)
            ***REMOVED***
                return NotFound();
        ***REMOVED***

            var race = await _context.Races
                .Include(r => r.DataDeathvalueDeathNavigation)
                .Include(r => r.DataFiguresize)
                .Include(r => r.DataInitiativevalueInitiativeNavigation)
                .Include(r => r.DataInjuryvalueInjuryNavigation)
                .Include(r => r.DataLifevalueLifeNavigation)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (race == null)
            ***REMOVED***
                return NotFound();
        ***REMOVED***

            return View(race);
    ***REMOVED***

        // POST: Races/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        ***REMOVED***
            if (_context.Races == null)
            ***REMOVED***
                return Problem("Entity set 'ApplicationDbContext.Races'  is null.");
        ***REMOVED***
            var race = await _context.Races.FindAsync(id);
            if (race != null)
            ***REMOVED***
                _context.Races.Remove(race);
        ***REMOVED***
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
    ***REMOVED***

        private bool RaceExists(int id)
        ***REMOVED***
          return (_context.Races?.Any(e => e.Id == id)).GetValueOrDefault();
    ***REMOVED***
***REMOVED***
***REMOVED***
