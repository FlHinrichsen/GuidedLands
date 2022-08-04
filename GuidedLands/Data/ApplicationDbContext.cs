using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GuidedLands.Data
{
  using GuidedLands.Data.DataObjects;

  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    
    public virtual DbSet<DataDeathvalue> DataDeathvalues { get; set; }
    public virtual DbSet<DataFiguresize> DataFiguresizes { get; set; }
    public virtual DbSet<DataFiguresizevalue> DataFiguresizevalues { get; set; }
    public virtual DbSet<DataInitiativevalue> DataInitiativevalues { get; set; }
    public virtual DbSet<DataInjuryvalue> DataInjuryvalues { get; set; }
    public virtual DbSet<DataLifevalue> DataLifevalues { get; set; }
    public virtual DbSet<Race> Races { get; set; }
        
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<DataDeathvalue>(entity =>
      {
        entity.HasKey(e => e.Death)
                  .HasName("PRIMARY");

        entity.ToTable("data_deathvalue");

        entity.HasIndex(e => e.Death, "death")
                  .IsUnique();

        entity.Property(e => e.Death)
                  .HasColumnType("int(11)")
                  .HasColumnName("death");

        entity.Property(e => e.Price)
                  .HasColumnType("int(11)")
                  .HasColumnName("price");
      });

      modelBuilder.Entity<DataFiguresize>(entity =>
      {
        entity.ToTable("data_figuresize");

        entity.HasIndex(e => e.Text, "text")
                  .IsUnique();

        entity.Property(e => e.Id)
                  .HasColumnType("int(11)")
                  .HasColumnName("id");

        entity.Property(e => e.High).HasColumnName("high");

        entity.Property(e => e.Low).HasColumnName("low");

        entity.Property(e => e.Text)
                  .IsRequired()
                  .HasMaxLength(20)
                  .HasColumnName("text");
      });

      modelBuilder.Entity<DataFiguresizevalue>(entity =>
      {
        entity.HasKey(e => e.FiguresizeId)
                  .HasName("PRIMARY");

        entity.ToTable("data_figuresizevalue");

        entity.Property(e => e.FiguresizeId)
                  .HasColumnType("int(11)")
                  .HasColumnName("figuresize_id");

        entity.Property(e => e.DeathHigh)
                  .HasColumnType("int(11)")
                  .HasColumnName("death_high");

        entity.Property(e => e.DeathLow)
                  .HasColumnType("int(11)")
                  .HasColumnName("death_low");

        entity.Property(e => e.Initiative)
                  .HasColumnType("int(11)")
                  .HasColumnName("initiative");

        entity.Property(e => e.InsuryHigh)
                  .HasColumnType("int(11)")
                  .HasColumnName("insury_high");

        entity.Property(e => e.InsuryLow)
                  .HasColumnType("int(11)")
                  .HasColumnName("insury_low");

        entity.Property(e => e.LifeHigh)
                  .HasColumnType("int(11)")
                  .HasColumnName("life_high");

        entity.Property(e => e.LifeLow)
                  .HasColumnType("int(11)")
                  .HasColumnName("life_low");

        entity.Property(e => e.Price)
                  .HasColumnType("int(11)")
                  .HasColumnName("price");

        entity.HasOne(d => d.Figuresize)
                  .WithOne(p => p.DataFiguresizevalue)
                  .HasForeignKey<DataFiguresizevalue>(d => d.FiguresizeId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("figuresizevalue_1");
      });

      modelBuilder.Entity<DataInitiativevalue>(entity =>
      {
        entity.HasKey(e => e.Initiative)
                  .HasName("PRIMARY");

        entity.ToTable("data_initiativevalue");

        entity.HasIndex(e => e.Initiative, "initiative")
                  .IsUnique();

        entity.Property(e => e.Initiative)
                  .HasColumnType("int(11)")
                  .HasColumnName("initiative");

        entity.Property(e => e.Price)
                  .HasColumnType("int(11)")
                  .HasColumnName("price");
      });

      modelBuilder.Entity<DataInjuryvalue>(entity =>
      {
        entity.HasKey(e => e.Injury)
                  .HasName("PRIMARY");

        entity.ToTable("data_injuryvalue");

        entity.HasIndex(e => e.Injury, "injury")
                  .IsUnique();

        entity.Property(e => e.Injury)
                  .HasColumnType("int(11)")
                  .HasColumnName("injury");

        entity.Property(e => e.Price)
                  .HasColumnType("int(11)")
                  .HasColumnName("price");
      });

      modelBuilder.Entity<DataLifevalue>(entity =>
      {
        entity.HasKey(e => e.Life)
                  .HasName("PRIMARY");

        entity.ToTable("data_lifevalue");

        entity.HasIndex(e => e.Life, "life")
                  .IsUnique();

        entity.Property(e => e.Life)
                  .HasColumnType("int(11)")
                  .HasColumnName("life");

        entity.Property(e => e.Price)
                  .HasColumnType("int(11)")
                  .HasColumnName("price");
      });
      
      modelBuilder.Entity<Race>(entity =>
      {
        entity.ToTable("race");

        entity.HasIndex(e => e.Name, "name")
                  .IsUnique();

        entity.HasIndex(e => e.DataFiguresizeId, "race_1");

        entity.HasIndex(e => e.DataDeathvalueDeath, "race_2");

        entity.HasIndex(e => e.DataInjuryvalueInjury, "race_3");

        entity.HasIndex(e => e.DataInitiativevalueInitiative, "race_4");

        entity.HasIndex(e => e.DataLifevalueLife, "race_5");

        entity.Property(e => e.Id)
                  .HasColumnType("int(11)")
                  .HasColumnName("id");

        entity.Property(e => e.DataDeathvalueDeath)
                  .HasColumnType("int(11)")
                  .HasColumnName("data_deathvalue_death");

        entity.Property(e => e.DataFiguresizeId)
                  .HasColumnType("int(11)")
                  .HasColumnName("data_figuresize_id");

        entity.Property(e => e.DataInitiativevalueInitiative)
                  .HasColumnType("int(11)")
                  .HasColumnName("data_initiativevalue_initiative");

        entity.Property(e => e.DataInjuryvalueInjury)
                  .HasColumnType("int(11)")
                  .HasColumnName("data_injuryvalue_injury");

        entity.Property(e => e.DataLifevalueLife)
                  .HasColumnType("int(11)")
                  .HasColumnName("data_lifevalue_life");

        entity.Property(e => e.Name)
                  .IsRequired()
                  .HasMaxLength(100)
                  .HasColumnName("name");

        entity.Property(e => e.Weight1)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_1");

        entity.Property(e => e.Weight10)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_10");

        entity.Property(e => e.Weight11)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_11");

        entity.Property(e => e.Weight2)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_2");

        entity.Property(e => e.Weight3)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_3");

        entity.Property(e => e.Weight4)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_4");

        entity.Property(e => e.Weight5)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_5");

        entity.Property(e => e.Weight6)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_6");

        entity.Property(e => e.Weight7)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_7");

        entity.Property(e => e.Weight8)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_8");

        entity.Property(e => e.Weight9)
                  .HasColumnType("int(11)")
                  .HasColumnName("weight_9");

        entity.HasOne(d => d.DataDeathvalueDeathNavigation)
                  .WithMany(p => p.Races)
                  .HasForeignKey(d => d.DataDeathvalueDeath)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("race_2");

        entity.HasOne(d => d.DataFiguresize)
                  .WithMany(p => p.Races)
                  .HasForeignKey(d => d.DataFiguresizeId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("race_1");

        entity.HasOne(d => d.DataInitiativevalueInitiativeNavigation)
                  .WithMany(p => p.Races)
                  .HasForeignKey(d => d.DataInitiativevalueInitiative)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("race_4");

        entity.HasOne(d => d.DataInjuryvalueInjuryNavigation)
                  .WithMany(p => p.Races)
                  .HasForeignKey(d => d.DataInjuryvalueInjury)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("race_3");

        entity.HasOne(d => d.DataLifevalueLifeNavigation)
                  .WithMany(p => p.Races)
                  .HasForeignKey(d => d.DataLifevalueLife)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("race_5");
      });
    }
  }
}