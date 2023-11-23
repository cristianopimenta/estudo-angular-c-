using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VacinaCao.API.Migrations
{
    public partial class InitialMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Estoque_Vacina",
                columns: table => new
                {
                    VaciId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome_Vacina = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quantidade = table.Column<int>(type: "int", nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data_Fabricacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Data_Validade = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Lote = table.Column<int>(type: "int", nullable: false),
                    Refrigeracao = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estoque_Vacina", x => x.VaciId);
                });

            migrationBuilder.CreateTable(
                name: "Pacientes",
                columns: table => new
                {
                    PacId = table.Column<int>(type: "int", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data_Nascimento = table.Column<string>(type: "nvarchar(max)", nullable: false),                    
                    Peso = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Raca = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Especie = table.Column<int>(type: "nvarchar(max)", nullable: false),
                    Sexo = table.Column<int>(type: "nvarchar(max)", nullable: false)
                });

            migrationBuilder.CreateTable(
                name: "Tutores",
                columns: table => new
                {
                    TutorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CPF = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cidade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rua = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Numero = table.Column<int>(type: "int", nullable: false),
                    PacId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Createtime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tutores", x => x.TutorId);
                    
                });

            migrationBuilder.CreateTable(
                name: "Vacinacao",
                columns: table => new
                {
                    Id_Vacinacao = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PacId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VaciId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data_Aplicacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Reacoes = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacinacao", x => x.Id_Vacinacao);


                });
                    
                
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Estoque_Vacina");

            migrationBuilder.DropTable(
                name: "Pacientes");

            migrationBuilder.DropTable(
                name: "Tutores");

            migrationBuilder.DropTable(
                name: "Vacinacao");
        }
    }
}
