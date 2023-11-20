using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VacinaCao.API.Models
{

   
    public class Pacientes
    {

        [Key]
        public Guid PacId { get; set; }

        public string Nome { get; set; }

        public DateTime Data_Nascimento { get; set; }

        [Precision(18,2)]
        public decimal Peso { get; set; }

        public string Raca { get; set; }

        public EspecieClients Especie { get; set; }


    }
    

    public enum EspecieClients
    {

        Cachorros = 0,
        Gatos = 1,
        Aves = 2,
        Roedores = 3,
        Outros = 4
    }
}
