﻿using GuidedLands.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace GuidedLands.Controllers
***REMOVED***
  public class HomeController : Controller
  ***REMOVED***
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    ***REMOVED***
      _logger = logger;
***REMOVED***

    public IActionResult Index()
    ***REMOVED***
      return View();
***REMOVED***

    public IActionResult Privacy()
    ***REMOVED***
      return View();
***REMOVED***

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    ***REMOVED***
      return View(new ErrorViewModel ***REMOVED*** RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier ***REMOVED***);
***REMOVED***
  ***REMOVED***
***REMOVED***