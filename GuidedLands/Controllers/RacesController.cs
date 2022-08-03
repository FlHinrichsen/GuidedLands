using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GuidedLands.Data;

namespace GuidedLands.Controllers
{
  using GuidedLands.Data.DataObjects;

  public class RacesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public RacesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Races
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Races
              .Include(r => r.DataDeathvalueDeathNavigation)
              .Include(r => r.DataFiguresize)
              .Include(r => r.DataInitiativevalueInitiativeNavigation)
              .Include(r => r.DataInjuryvalueInjuryNavigation)
              .Include(r => r.DataLifevalueLifeNavigation)
              .Include( r => r.DataFiguresize.DataFiguresizevalue);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Races/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Races == null)
            {
                return NotFound();
            }

            var race = await _context.Races
                .Include(r => r.DataDeathvalueDeathNavigation)
                .Include(r => r.DataFiguresize)
                .Include(r => r.DataInitiativevalueInitiativeNavigation)
                .Include(r => r.DataInjuryvalueInjuryNavigation)
                .Include(r => r.DataLifevalueLifeNavigation)
                .Include( r => r.DataFiguresize.DataFiguresizevalue)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (race == null)
            {
                return NotFound();
            }

            return View(race);
        }

        // GET: Races/Create
        public IActionResult Create()
        {
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death");
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text");
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative");
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury");
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life");
            return View();
        }

        // POST: Races/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,DataFiguresizeId,DataDeathvalueDeath,DataInjuryvalueInjury,DataLifevalueLife,DataInitiativevalueInitiative,Weight11,Weight10,Weight9,Weight8,Weight7,Weight6,Weight5,Weight4,Weight3,Weight2,Weight1")] Race race)
        {
            if (ModelState.IsValid)
            {
                _context.Add(race);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death", race.DataDeathvalueDeath);
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text", race.DataFiguresizeId);
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative", race.DataInitiativevalueInitiative);
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury", race.DataInjuryvalueInjury);
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life", race.DataLifevalueLife);
            return View(race);
        }

        // GET: Races/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Races == null)
            {
                return NotFound();
            }

            var race = await _context.Races.FindAsync(id);
            if (race == null)
            {
                return NotFound();
            }
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death", race.DataDeathvalueDeath);
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text", race.DataFiguresizeId);
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative", race.DataInitiativevalueInitiative);
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury", race.DataInjuryvalueInjury);
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life", race.DataLifevalueLife);
            return View(race);
        }

        // POST: Races/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,DataFiguresizeId,DataDeathvalueDeath,DataInjuryvalueInjury,DataLifevalueLife,DataInitiativevalueInitiative,Weight11,Weight10,Weight9,Weight8,Weight7,Weight6,Weight5,Weight4,Weight3,Weight2,Weight1")] Race race)
        {
            if (id != race.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(race);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RaceExists(race.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["DataDeathvalueDeath"] = new SelectList(_context.DataDeathvalues, "Death", "Death", race.DataDeathvalueDeath);
            ViewData["DataFiguresizeId"] = new SelectList(_context.DataFiguresizes, "Id", "Text", race.DataFiguresizeId);
            ViewData["DataInitiativevalueInitiative"] = new SelectList(_context.DataInitiativevalues, "Initiative", "Initiative", race.DataInitiativevalueInitiative);
            ViewData["DataInjuryvalueInjury"] = new SelectList(_context.DataInjuryvalues, "Injury", "Injury", race.DataInjuryvalueInjury);
            ViewData["DataLifevalueLife"] = new SelectList(_context.DataLifevalues, "Life", "Life", race.DataLifevalueLife);
            return View(race);
        }

        // GET: Races/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Races == null)
            {
                return NotFound();
            }

            var race = await _context.Races
                .Include(r => r.DataDeathvalueDeathNavigation)
                .Include(r => r.DataFiguresize)
                .Include(r => r.DataInitiativevalueInitiativeNavigation)
                .Include(r => r.DataInjuryvalueInjuryNavigation)
                .Include(r => r.DataLifevalueLifeNavigation)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (race == null)
            {
                return NotFound();
            }

            return View(race);
        }

        // POST: Races/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Races == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Races'  is null.");
            }
            var race = await _context.Races.FindAsync(id);
            if (race != null)
            {
                _context.Races.Remove(race);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RaceExists(int id)
        {
          return (_context.Races?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
