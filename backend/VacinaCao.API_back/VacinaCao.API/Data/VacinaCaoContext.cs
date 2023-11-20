using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using VacinaCao.API.Models;

namespace VacinaCao.API.Data
{
    public class VacinaCaoContext : DbContext
    {
        public VacinaCaoContext(DbContextOptions<VacinaCaoContext> options)
         : base(options){ }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfiguration configuration = new ConfigurationBuilder()
             .SetBasePath(Directory.GetCurrentDirectory())
             .AddJsonFile("appsettings.json", false, true)
             .Build();

            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        }
        public DbSet<Tutores> Tutores { get; set; }
        public DbSet<Pacientes> Pacientes { get; set; }
        public DbSet<VacEstoque> Estoque_Vacina { get; set; }
        public DbSet<Vacinacao> Vacinacao { get; set; }

        /* protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
            # modelBuilder.Entity<Post>()
            #     .HasOne(p => p.Pacientes)
            #    .WithMany(b => b.Tutores)
            #    .HasForeignKey(p => p.PacId)
            #    .HasPrincipalKey(b => b.id);
         }*/

    }
}
