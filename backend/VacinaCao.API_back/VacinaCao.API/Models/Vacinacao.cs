using System.ComponentModel.DataAnnotations;

namespace VacinaCao.API.Models
{
    public class Vacinacao
    {

        [Key]
        public Guid Id_Vacinacao { get; set; }

        public Guid PacId { get; set; }

        public Guid VaciId { get; set; }

        public DateTime Data_Aplicacao { get; set; }

        public string Reacoes { get; set; }


    }
}
